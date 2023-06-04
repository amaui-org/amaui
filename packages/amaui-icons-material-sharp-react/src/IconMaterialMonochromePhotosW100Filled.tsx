import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonochromePhotosW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonochromePhotosW100Filled'

      short_name='MonochromePhotos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19h8V7h-8v2.8q-1.325 0-2.262.937Q8.8 11.675 8.8 13t.938 2.262q.937.938 2.262.938Zm0-2.8v-.7q1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775Q13.05 10.5 12 10.5v-.7q1.325 0 2.263.937.937.938.937 2.263t-.937 2.262q-.938.938-2.263.938Zm0-.7q-1.05 0-1.775-.725Q9.5 14.05 9.5 13q0-1.05.725-1.775Q10.95 10.5 12 10.5Zm-8.7 4.2V6.3h4.4l1.85-2h4.9l1.85 2h4.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialMonochromePhotosW100Filled.displayName = 'AmauiIconMaterialMonochromePhotosW100Filled';

export default IconMaterialMonochromePhotosW100Filled;
