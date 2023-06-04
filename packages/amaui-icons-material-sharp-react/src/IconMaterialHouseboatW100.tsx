import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseboatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseboatW100'

      short_name='Houseboat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 17.7v-.725q.775-.2 1.238-.588Q4.35 16 5.325 16q1.2 0 1.788.5.587.5 1.537.5 1.025 0 1.613-.5Q10.85 16 12 16q1.15 0 1.738.5.587.5 1.612.5.95 0 1.538-.5.587-.5 1.787-.5 1.05 0 1.438.363.387.362 1.237.612v.725q-.775-.15-1.312-.575-.538-.425-1.388-.425-1 0-1.575.5t-1.75.5q-1.2 0-1.725-.5-.525-.5-1.6-.5-1.075 0-1.6.5-.525.5-1.725.5-1.175 0-1.75-.5t-1.575-.5q-.875 0-1.387.425-.513.425-1.313.575Zm3.075-4-1.55-1.6.475-.475L6.075 13H8.3V8.675l-1.325.975-.425-.55L12 5.075l5.425 4L17 9.65l-1.3-.95V13h2.225l1.425-1.375.475.475-1.6 1.6ZM9 13h2.65v-2h.7v2H15V8.175L12 5.95l-3 2.2Zm0 0h6-6Z"/>
    </Icon>
  );
});

IconMaterialHouseboatW100.displayName = 'AmauiIconMaterialHouseboatW100';

export default IconMaterialHouseboatW100;
