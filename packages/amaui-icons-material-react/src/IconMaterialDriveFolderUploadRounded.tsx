import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDriveFolderUploadRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUploadRounded'
      short_name='DriveFolderUpload'

      {...props}
    >
      <path d="M12 17Q12.425 17 12.713 16.712Q13 16.425 13 16V12.8L13.9 13.7Q14.05 13.85 14.225 13.912Q14.4 13.975 14.6 13.975Q14.8 13.975 14.975 13.912Q15.15 13.85 15.3 13.7Q15.575 13.425 15.575 13Q15.575 12.575 15.3 12.3L12.7 9.7Q12.4 9.4 12 9.4Q11.6 9.4 11.3 9.7L8.7 12.3Q8.425 12.575 8.425 13Q8.425 13.425 8.7 13.7Q8.975 13.975 9.4 13.975Q9.825 13.975 10.1 13.7L11 12.8V16Q11 16.425 11.288 16.712Q11.575 17 12 17ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H9.175Q9.575 4 9.938 4.15Q10.3 4.3 10.575 4.575L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 6V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V8Q20 8 20 8Q20 8 20 8H11.175L9.175 6Q9.175 6 9.175 6Q9.175 6 9.175 6H4Q4 6 4 6Q4 6 4 6ZM4 6Q4 6 4 6Q4 6 4 6V8Q4 8 4 8Q4 8 4 8V18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUploadRounded.displayName = 'AmauiIconMaterialDriveFolderUploadRounded';

export default IconMaterialDriveFolderUploadRounded;
