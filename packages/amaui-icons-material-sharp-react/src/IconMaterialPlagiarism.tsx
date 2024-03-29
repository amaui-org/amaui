import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlagiarism = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Plagiarism'

      short_name='Plagiarism'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.45 17q.45 0 .888-.113.437-.112.812-.337L15.6 19l1.4-1.4-2.45-2.45q.225-.375.337-.813Q15 13.9 15 13.45 15 12 13.975 11q-1.025-1-2.475-1-1.45 0-2.475 1.025Q8 12.05 8 13.5q0 1.45 1 2.475Q10 17 11.45 17Zm.05-2q-.625 0-1.062-.438Q10 14.125 10 13.5t.438-1.062Q10.875 12 11.5 12t1.062.438Q13 12.875 13 13.5t-.438 1.062Q12.125 15 11.5 15ZM4 22V2h10l6 6v14Zm9-13V4H6v16h12V9ZM6 4v5-5 16Z"/>
    </Icon>
  );
});

IconMaterialPlagiarism.displayName = 'AmauiIconMaterialPlagiarism';

export default IconMaterialPlagiarism;
