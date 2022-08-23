import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDriveFolderUploadRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUploadRoundedFilled'
      short_name='DriveFolderUpload'

      {...props}
    >
      <path d="M11 16Q11 16.425 11.288 16.712Q11.575 17 12 17Q12.425 17 12.713 16.725Q13 16.45 13 16.025V13H14.8Q15.15 13 15.262 12.688Q15.375 12.375 15.15 12.15L12.35 9.35Q12.2 9.2 12 9.2Q11.8 9.2 11.65 9.35L8.85 12.15Q8.625 12.375 8.738 12.688Q8.85 13 9.2 13H11ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H9.175Q9.575 4 9.938 4.15Q10.3 4.3 10.575 4.575L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUploadRoundedFilled.displayName = 'AmauiIconMaterialDriveFolderUploadRoundedFilled';

export default IconMaterialDriveFolderUploadRoundedFilled;
