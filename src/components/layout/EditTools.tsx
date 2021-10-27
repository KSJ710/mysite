import React, { ReactElement, useContext } from 'react';
import Background from 'src/components/edit_tools/Background';
import { EditContext } from 'src/pages/template';

const EditTools: React.VFC = (): ReactElement => {
  const editVar: EditVar = useContext(EditContext);
  return (
    <div style={{ display: `${editVar.display}` }}>
      <Background />
    </div>
  );
};

export default EditTools;
