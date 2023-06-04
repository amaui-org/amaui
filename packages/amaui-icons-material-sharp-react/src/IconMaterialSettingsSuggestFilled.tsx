import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsSuggestFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsSuggestFilled'

      short_name='SettingsSuggest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.525 9-1.1-2.4-2.4-1.1 2.4-1.1 1.1-2.4 1.1 2.4 2.4 1.1-2.4 1.1Zm2 7-.8-1.7-1.7-.8 1.7-.8.8-1.7.8 1.7 1.7.8-1.7.8Zm-13 6-.3-2.35q-.2-.075-.387-.2-.188-.125-.313-.25l-2.2.95-2.5-4.35 1.9-1.4v-.8l-1.9-1.4 2.5-4.35 2.2.95q.125-.125.313-.25.187-.125.387-.2l.3-2.35h5l.3 2.35q.2.075.388.2.187.125.312.25l2.2-.95 2.5 4.35-1.9 1.4v.8l1.9 1.4-2.5 4.35-2.2-.95q-.125.125-.312.25-.188.125-.388.2l-.3 2.35Zm2.5-5q1.25 0 2.125-.875T13.025 14q0-1.25-.875-2.125T10.025 11q-1.25 0-2.125.875T7.025 14q0 1.25.875 2.125t2.125.875Z"/>
    </Icon>
  );
});

IconMaterialSettingsSuggestFilled.displayName = 'AmauiIconMaterialSettingsSuggestFilled';

export default IconMaterialSettingsSuggestFilled;
