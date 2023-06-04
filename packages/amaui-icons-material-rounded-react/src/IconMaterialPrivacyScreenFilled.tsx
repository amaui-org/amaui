import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivacyScreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyScreenFilled'

      short_name='PrivacyScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m80 560 304-304H160q-33 0-56.5 23.5T80 336v224Zm0 280 583-584H496L80 673v167Zm56 56h664q33 0 56.5-23.5T880 816V336q0-33-23.5-56.5T800 256h-24L136 896Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreenFilled.displayName = 'AmauiIconMaterialPrivacyScreenFilled';

export default IconMaterialPrivacyScreenFilled;
