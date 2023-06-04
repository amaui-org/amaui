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
      <path d="m80 560 304-304H80v304Zm0 280 583-584H496L80 673v167Zm56 56h744V256H776L136 896Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreenFilled.displayName = 'AmauiIconMaterialPrivacyScreenFilled';

export default IconMaterialPrivacyScreenFilled;
