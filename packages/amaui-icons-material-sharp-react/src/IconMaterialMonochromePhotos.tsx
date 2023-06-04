import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonochromePhotos = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonochromePhotos'

      short_name='MonochromePhotos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19h8V7h-8v1.5q-1.875 0-3.188 1.312Q7.5 11.125 7.5 13q0 1.875 1.312 3.188Q10.125 17.5 12 17.5Zm0-1.5v-2q1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775Q13.05 10.5 12 10.5v-2q1.875 0 3.188 1.312Q16.5 11.125 16.5 13q0 1.875-1.312 3.188Q13.875 17.5 12 17.5Zm0-2q-1.05 0-1.775-.725Q9.5 14.05 9.5 13q0-1.05.725-1.775Q10.95 10.5 12 10.5ZM2 21V5h5.15L9 3h6l1.85 2H22v16Z"/>
    </Icon>
  );
});

IconMaterialMonochromePhotos.displayName = 'AmauiIconMaterialMonochromePhotos';

export default IconMaterialMonochromePhotos;
