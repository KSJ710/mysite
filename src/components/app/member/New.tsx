import { useRouter } from 'next/router';

const New = (): JSX.Element => {
  const router = useRouter();
  const { result } = router.query;
  return (
    <>
      <form action="/api/member/create" method="post">
        <label htmlFor="name">
          Name:
          <input type="text" name="name" className="border-2" />
        </label>
        <label htmlFor="email">
          email:
          <input type="text" name="email" className="border-2" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" className="border-2" />
        </label>
        <input type="submit" value="Submit" className="px-4 mt-2 bg-cyan-300 rounded-full " />
      </form>
      {result === 'error' ? <div>エラーです。</div> : null}
    </>
  );
};

export default New;
