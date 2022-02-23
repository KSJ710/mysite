import { useRecoilState } from 'recoil';
import { newMemberFormState } from 'src/atoms/member/atoms';

export const useNewMemberForm = () => {
  const [newMemberForm, setNewMemberForm] = useRecoilState(newMemberFormState);

  const changeFormName = (e) => {
    setNewMemberForm({
      name: e.target.value,
      emailRequired: newMemberForm.emailRequired,
      passwordRequired: newMemberForm.passwordRequired,
    });
  };
  const changeFormEmail = (e) => {
    setNewMemberForm({
      name: e.target.value,
      emailRequired: newMemberForm.emailRequired,
      passwordRequired: newMemberForm.passwordRequired,
    });
  };
  const changeFormPassword = (e) => {
    setNewMemberForm({
      name: e.target.value,
      emailRequired: newMemberForm.emailRequired,
      passwordRequired: newMemberForm.passwordRequired,
    });
  };
};
