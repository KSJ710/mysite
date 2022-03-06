import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { SubmitHandler, useForm } from 'react-hook-form';
// atom
import {
  newMemberFormNameState,
  newMemberFormEmailState,
  newMemberFormPasswordState,
  newMemberFormConfirmPasswordState,
  newMemberFormPrefectureState,
  newMemberFormCityState,
} from 'src/atoms/member/atoms';
// その他ライブラリ
import axios from 'axios';
// コンポーネント
import FlashInputInvalid from 'src/components/common/FlashInvalid';
// helper
import { usePrefectures } from 'src/helper/custom_hook/m_prefecture';
import { useCity } from 'src/helper/custom_hook/m_city';
// sass
import styles from './New.module.scss';

type Inputs = {
  nameRequired: string;
  emailRequired: string;
  passwordRequired: string;
  confirmPasswordRequired: string;
  prefecture: string;
  city: string;
};

export default function New(): JSX.Element {
  // form state
  const [formName, setFormName] = useRecoilState(newMemberFormNameState);
  const [formEmail, setFormEmail] = useRecoilState(newMemberFormEmailState);
  const [formPassword, setFormPassword] = useRecoilState(newMemberFormPasswordState);
  const [formConfirmPassword, setFormConfirmPassword] = useRecoilState(newMemberFormConfirmPasswordState);
  const [formPrefecture, setFormPrefecture] = useRecoilState(newMemberFormPrefectureState);
  const [formCity, setFormCity] = useRecoilState(newMemberFormCityState);

  // cityの初期親値
  const [prefectureState, setPrefectureState] = useState('1');

  // メール送信フラッシュ
  const [flashSendEmail, setFlashSendEmail] = useState(false);

  // react-hoook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  //  submitされた時のイベント
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { nameRequired, emailRequired, passwordRequired } = data;
    createMember(nameRequired, emailRequired, passwordRequired).then(() => {
      setFlashSendEmail(true);
    });
  };

  return (
    <div className={styles.base}>
      {flashSendEmail ? <div>メールが送られました</div> : null}

      <h1>アカウント作成</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          <span>名前</span>
          <input
            id="name"
            defaultValue={formName}
            onInput={(e) => setFormName(e.currentTarget.value)}
            {...register('nameRequired', { required: true })}
          />
          {errors.nameRequired?.type === 'required' && (
            <FlashInputInvalid text="必須項目です" />
          )}
        </label>

        <label htmlFor="email">
          <span>メールアドレス</span>
          <input
            id="email"
            autoComplete="username"
            defaultValue={formEmail}
            onInput={(e) => setFormEmail(e.currentTarget.value)}
            {...register('emailRequired', {
              required: true,
              pattern:
                /^^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{1,}$/i,
            })}
          />
          {errors.emailRequired?.type === 'required' && (
            <FlashInputInvalid text="必須項目です" />
          )}
          {errors.emailRequired?.type === 'pattern' && (
            <FlashInputInvalid text="メールアドレスに誤りがあります" />
          )}
        </label>

        <label htmlFor="password">
          <span>パスワード</span>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            defaultValue={formPassword}
            onInput={(e) => setFormPassword(e.currentTarget.value)}
            {...register('passwordRequired', {
              required: true,
              pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,24}$/,
            })}
          />
          {errors.passwordRequired?.type === 'required' && (
            <FlashInputInvalid text="必須項目です" />
          )}
          {errors.passwordRequired?.type === 'pattern' && (
            <FlashInputInvalid text="半角英小文字,大文字,数字を1種類以上を含み8文字以上24文字以下にして下さい" />
          )}
        </label>

        <label htmlFor="confirmPassword">
          <span>もう一度パスワードを入力して下さい</span>
          <input
            id="confirmPassword"
            type="password"
            autoComplete="new-password"
            defaultValue={formConfirmPassword}
            onInput={(e) => setFormConfirmPassword(e.currentTarget.value)}
            {...register('confirmPasswordRequired', {
              required: true,
              pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,24}$/,
            })}
          />
          {errors.confirmPasswordRequired?.type === 'required' &&
            formPassword !== '' && (
              <FlashInputInvalid text="パスワードを再度入力して下さい" />
            )}
        </label>

        <label htmlFor="prefecture">
          <span>都道府県</span>
          <select
            id="prefecture"
            defaultValue={formPrefecture}
            {...register('prefecture')}
            onChange={(e) => setPrefectureState(e.currentTarget.value)}
          >
            <FormSelectPrefecture />
          </select>
        </label>

        <label htmlFor="city">
          <span>市町村</span>
          <select id="city" defaultValue={formCity} {...register('city')}>
            <FormSelectCity prefectureId={prefectureState} />
          </select>
        </label>

        <input
          type="submit"
          value="メールアドレス確認"
          className="rounded-full"
        />
      </form>
    </div>
  );
}

async function createMember(name, email, password) {
  try {
    await axios.post('/api/member/create', {
      name: name,
      email: email,
      password: password,
    });
  } catch (error) {
    console.error(error);
  }
}

function FormSelectPrefecture(): JSX.Element {
  const { prefectures, isLoading, isError } = usePrefectures();
  if (isLoading) return <option>読込中</option>;
  if (isError) return <option>エラーが起きています</option>;

  return prefectures.map((prefecture) => (
    <option key={prefecture.id} value={prefecture.id}>
      {prefecture.name}
    </option>
  ));
}

function FormSelectCity(props): JSX.Element {
  const { cities, isLoading, isError } = useCity(props.prefectureId);
  if (isLoading) return <option>読込中</option>;
  if (isError) return <option>エラーが起きています</option>;

  return cities.map((city) => (
    <option key={city.id} value={city.id}>
      {city.name}
    </option>
  ));
}
