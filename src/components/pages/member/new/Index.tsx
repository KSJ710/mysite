import { useRouter } from 'next/router';
import Inputs from 'src/components/pages/member/new/Inputs';
import Confirm from 'src/components/pages/member/new/Confirm';

export default function NewInputs(): JSX.Element {
  const { step } = useRouter().query;
  console.log(step);
  return step === 'confirm' ? <Confirm /> : <Inputs />;
}
