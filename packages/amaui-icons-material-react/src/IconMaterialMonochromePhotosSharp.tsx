import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonochromePhotosSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonochromePhotosSharp'
      short_name='MonochromePhotos'

      {...props}
    >
      <path d="M12 19H20V7H12V8.5Q10.125 8.5 8.812 9.812Q7.5 11.125 7.5 13Q7.5 14.875 8.812 16.188Q10.125 17.5 12 17.5ZM12 17.5V15.5Q13.05 15.5 13.775 14.775Q14.5 14.05 14.5 13Q14.5 11.95 13.775 11.225Q13.05 10.5 12 10.5V8.5Q13.875 8.5 15.188 9.812Q16.5 11.125 16.5 13Q16.5 14.875 15.188 16.188Q13.875 17.5 12 17.5ZM12 15.5Q10.95 15.5 10.225 14.775Q9.5 14.05 9.5 13Q9.5 11.95 10.225 11.225Q10.95 10.5 12 10.5ZM2 21V5H7.15L9 3H15L16.85 5H22V21Z"/>
    </Icon>
  );
});

IconMaterialMonochromePhotosSharp.displayName = 'AmauiIconMaterialMonochromePhotosSharp';

export default IconMaterialMonochromePhotosSharp;
