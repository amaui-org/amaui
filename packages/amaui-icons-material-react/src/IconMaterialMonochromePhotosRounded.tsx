import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonochromePhotosRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonochromePhotosRounded'
      short_name='MonochromePhotos'

      {...props}
    >
      <path d="M12 19H20Q20 19 20 19Q20 19 20 19V7Q20 7 20 7Q20 7 20 7H12V8.5Q10.125 8.5 8.812 9.812Q7.5 11.125 7.5 13Q7.5 14.875 8.812 16.188Q10.125 17.5 12 17.5ZM12 17.5V15.5Q13.05 15.5 13.775 14.775Q14.5 14.05 14.5 13Q14.5 11.95 13.775 11.225Q13.05 10.5 12 10.5V8.5Q13.875 8.5 15.188 9.812Q16.5 11.125 16.5 13Q16.5 14.875 15.188 16.188Q13.875 17.5 12 17.5ZM12 15.5Q10.95 15.5 10.225 14.775Q9.5 14.05 9.5 13Q9.5 11.95 10.225 11.225Q10.95 10.5 12 10.5ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V7Q2 6.175 2.588 5.588Q3.175 5 4 5H7.15L8.4 3.65Q8.675 3.325 9.062 3.162Q9.45 3 9.875 3H14.125Q14.55 3 14.938 3.162Q15.325 3.325 15.6 3.65L16.85 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V19Q22 19.825 21.413 20.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialMonochromePhotosRounded.displayName = 'AmauiIconMaterialMonochromePhotosRounded';

export default IconMaterialMonochromePhotosRounded;
