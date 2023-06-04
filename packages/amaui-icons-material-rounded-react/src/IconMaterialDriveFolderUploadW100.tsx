import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFolderUploadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUploadW100'

      short_name='DriveFolderUpload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q.15 0 .25-.1t.1-.25v-4.5l2.025 2.025q.05.05.113.075.062.025.125.025.062 0 .137-.025.075-.025.125-.075.125-.125.125-.25t-.125-.25l-2.35-2.35Q12.3 10.1 12 10.1q-.3 0-.525.225l-2.3 2.3q-.1.1-.113.238-.012.137.113.262t.25.125q.125 0 .25-.125l1.975-1.975v4.5q0 .15.1.25t.25.1Zm-7.2 2.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.575q.3 0 .588.125.287.125.487.325l.55.55h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425ZM4 7.8v9.4q0 .35.225.575Q4.45 18 4.8 18h14.4q.35 0 .575-.225Q20 17.55 20 17.2V8.8q0-.35-.225-.575Q19.55 8 19.2 8h-7.475l-.775-.775q-.125-.125-.262-.175Q10.55 7 10.4 7H4.8q-.35 0-.575.225Q4 7.45 4 7.8Zm0 0V7v11V17.2Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUploadW100.displayName = 'AmauiIconMaterialDriveFolderUploadW100';

export default IconMaterialDriveFolderUploadW100;
