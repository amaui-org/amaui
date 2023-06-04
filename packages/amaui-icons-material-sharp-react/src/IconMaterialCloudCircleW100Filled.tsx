import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudCircleW100Filled'

      short_name='CloudCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 14.7H16q.725 0 1.212-.488.488-.487.488-1.212 0-.675-.475-1.188Q16.75 11.3 16 11.3h-1.3v-.775q0-1.15-.787-1.937-.788-.788-1.888-.788-1.1 0-1.875.712-.775.713-.85 1.788h-.8q-.9 0-1.55.662-.65.663-.65 1.513 0 .925.638 1.575.637.65 1.562.65Zm3.5 6q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialCloudCircleW100Filled.displayName = 'AmauiIconMaterialCloudCircleW100Filled';

export default IconMaterialCloudCircleW100Filled;
