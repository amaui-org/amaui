import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudUploadRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudUploadRoundedW100Filled'
      short_name='CloudUpload'

      {...props}
    >
      <path d="M6.5 18.7Q4.75 18.7 3.525 17.475Q2.3 16.25 2.3 14.5Q2.3 12.85 3.475 11.575Q4.65 10.3 6.35 10.3Q6.6 8.15 8.213 6.725Q9.825 5.3 12 5.3Q14.375 5.3 16.038 6.963Q17.7 8.625 17.7 11V12.3H18.5Q19.85 12.3 20.775 13.225Q21.7 14.15 21.7 15.5Q21.7 16.85 20.775 17.775Q19.85 18.7 18.5 18.7H12.35V11.2L14.375 13.225Q14.475 13.325 14.613 13.325Q14.75 13.325 14.85 13.225Q14.975 13.125 14.963 12.975Q14.95 12.825 14.85 12.725L12.525 10.4Q12.3 10.175 12 10.175Q11.7 10.175 11.475 10.4L9.15 12.725Q9.05 12.825 9.038 12.975Q9.025 13.125 9.15 13.225Q9.25 13.325 9.4 13.312Q9.55 13.3 9.65 13.2L11.65 11.2V18.7Z"/>
    </Icon>
  );
});

IconMaterialCloudUploadRoundedW100Filled.displayName = 'AmauiIconMaterialCloudUploadRoundedW100Filled';

export default IconMaterialCloudUploadRoundedW100Filled;
