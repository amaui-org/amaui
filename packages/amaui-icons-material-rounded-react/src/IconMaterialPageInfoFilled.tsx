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
      <path d="M700-140q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T760-280q0-25-17.5-42.5T700-340q-25 0-42.5 17.5T640-280q0 25 17.5 42.5T700-220Zm-260-20H160q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h280q17 0 28.5 11.5T480-280q0 17-11.5 28.5T440-240ZM260-540q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T320-680q0-25-17.5-42.5T260-740q-25 0-42.5 17.5T200-680q0 25 17.5 42.5T260-620Zm540-20H520q-17 0-28.5-11.5T480-680q0-17 11.5-28.5T520-720h280q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640Z"/>
    </Icon>
  );
});

IconMaterialPageInfoFilled.displayName = 'AmauiIconMaterialPageInfoFilled';

export default IconMaterialPageInfoFilled;
