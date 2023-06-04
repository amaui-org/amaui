import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInputW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputW100'

      short_name='Input'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15.1-.5-.5 2.25-2.25H3.3v-.7h10.45L11.5 9.4l.5-.5 3.1 3.1Zm-8.7 3.6v-3.35H4V18h16V6H4v2.65h-.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialInputW100.displayName = 'AmauiIconMaterialInputW100';

export default IconMaterialInputW100;
