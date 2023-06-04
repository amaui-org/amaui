import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlagiarismW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlagiarismW100Filled'

      short_name='Plagiarism'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.225q.3 0 .588.125.287.125.487.325l3.15 3.15q.2.2.325.487.125.288.125.588V19.2q0 .65-.425 1.075-.425.425-1.075.425Zm7.5-13.75q0 .325.213.537.212.213.537.213H18L14.3 4Zm-3.35 8.65q.5 0 .95-.162.45-.163.85-.438l2.55 2.55q.1.1.238.113.137.012.262-.113t.125-.25q0-.125-.125-.25l-2.55-2.55q.325-.375.463-.838.137-.462.137-.962 0-1.175-.825-1.988Q12.2 9.9 11 9.9t-2.025.825q-.825.825-.825 2.025t.813 2.025q.812.825 1.987.825Zm.05-.7q-.875 0-1.512-.638-.638-.637-.638-1.512t.638-1.512Q10.125 10.6 11 10.6t1.512.638q.638.637.638 1.512t-.638 1.512q-.637.638-1.512.638Z"/>
    </Icon>
  );
});

IconMaterialPlagiarismW100Filled.displayName = 'AmauiIconMaterialPlagiarismW100Filled';

export default IconMaterialPlagiarismW100Filled;
