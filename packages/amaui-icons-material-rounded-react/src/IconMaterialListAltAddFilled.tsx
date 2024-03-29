import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialListAltAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltAddFilled'

      short_name='ListAltAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M640 616q17 0 28.5-11.5T680 576q0-17-11.5-28.5T640 536H480q-17 0-28.5 11.5T440 576q0 17 11.5 28.5T480 616h160Zm0-160q17 0 28.5-11.5T680 416q0-17-11.5-28.5T640 376H480q-17 0-28.5 11.5T440 416q0 17 11.5 28.5T480 456h160Zm40 440h-80q-17 0-28.5-11.5T560 856q0-17 11.5-28.5T600 816h80v-80q0-17 11.5-28.5T720 696q17 0 28.5 11.5T760 736v80h80q17 0 28.5 11.5T880 856q0 17-11.5 28.5T840 896h-80v80q0 17-11.5 28.5T720 1016q-17 0-28.5-11.5T680 976v-80ZM320 776q17 0 28.5-11.5T360 736q0-17-11.5-28.5T320 696q-17 0-28.5 11.5T280 736q0 17 11.5 28.5T320 776Zm0-160q17 0 28.5-11.5T360 576q0-17-11.5-28.5T320 536q-17 0-28.5 11.5T280 576q0 17 11.5 28.5T320 616Zm0-160q17 0 28.5-11.5T360 416q0-17-11.5-28.5T320 376q-17 0-28.5 11.5T280 416q0 17 11.5 28.5T320 456ZM200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v353q-27-16-57.5-24t-62.5-8q-53 0-99 21t-79 58h-62q-17 0-28.5 11.5T440 736q0 17 11.5 28.5T480 776h14q-7 19-10.5 39t-3.5 41q0 20 3 40t10 40H200Z"/>
    </Icon>
  );
});

IconMaterialListAltAddFilled.displayName = 'AmauiIconMaterialListAltAddFilled';

export default IconMaterialListAltAddFilled;
