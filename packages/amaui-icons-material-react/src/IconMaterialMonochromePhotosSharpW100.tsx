import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonochromePhotosSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonochromePhotosSharpW100'
      short_name='MonochromePhotos'

      {...props}
    >
      <path d="M12 19H20V7H12V9.8Q10.675 9.8 9.738 10.737Q8.8 11.675 8.8 13Q8.8 14.325 9.738 15.262Q10.675 16.2 12 16.2ZM12 16.2V15.5Q13.05 15.5 13.775 14.775Q14.5 14.05 14.5 13Q14.5 11.95 13.775 11.225Q13.05 10.5 12 10.5V9.8Q13.325 9.8 14.263 10.737Q15.2 11.675 15.2 13Q15.2 14.325 14.263 15.262Q13.325 16.2 12 16.2ZM12 15.5Q10.95 15.5 10.225 14.775Q9.5 14.05 9.5 13Q9.5 11.95 10.225 11.225Q10.95 10.5 12 10.5ZM3.3 19.7V6.3H7.7L9.55 4.3H14.45L16.3 6.3H20.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialMonochromePhotosSharpW100.displayName = 'AmauiIconMaterialMonochromePhotosSharpW100';

export default IconMaterialMonochromePhotosSharpW100;
