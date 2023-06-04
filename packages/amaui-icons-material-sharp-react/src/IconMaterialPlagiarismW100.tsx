import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlagiarismW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlagiarismW100'

      short_name='Plagiarism'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.95 15.6q.5 0 .95-.162.45-.163.85-.438l2.8 2.8.5-.5-2.8-2.8q.325-.375.463-.838.137-.462.137-.962 0-1.175-.825-1.988Q12.2 9.9 11 9.9t-2.025.825q-.825.825-.825 2.025t.813 2.025q.812.825 1.987.825Zm.05-.7q-.875 0-1.512-.638-.638-.637-.638-1.512t.638-1.512Q10.125 10.6 11 10.6t1.512.638q.638.637.638 1.512t-.638 1.512q-.637.638-1.512.638Zm-5.7 5.8V3.3h9.35l4.05 4.05V20.7Zm9-13V4H6v16h12V7.7ZM6 4v3.7V4v16Z"/>
    </Icon>
  );
});

IconMaterialPlagiarismW100.displayName = 'AmauiIconMaterialPlagiarismW100';

export default IconMaterialPlagiarismW100;
