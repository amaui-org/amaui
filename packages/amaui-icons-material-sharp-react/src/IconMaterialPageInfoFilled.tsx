import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPageInfoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageInfoFilled'

      short_name='PageInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-140q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T760-280q0-25-17.5-42.5T700-340q-25 0-42.5 17.5T640-280q0 25 17.5 42.5T700-220Zm-580-20v-80h360v80H120Zm140-300q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T320-680q0-25-17.5-42.5T260-740q-25 0-42.5 17.5T200-680q0 25 17.5 42.5T260-620Zm220-20v-80h360v80H480Z"/>
    </Icon>
  );
});

IconMaterialPageInfoFilled.displayName = 'AmauiIconMaterialPageInfoFilled';

export default IconMaterialPageInfoFilled;
