import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnowshoeingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowshoeingFilled'

      short_name='Snowshoeing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.5 5.5q.825 0 1.413-.588.587-.587.587-1.412t-.587-1.413Q15.325 1.5 14.5 1.5q-.825 0-1.412.587-.588.588-.588 1.413 0 .825.588 1.412.587.588 1.412.588ZM12 23v-1.5h2v-4.525l-2.1-2L11 18.2l-3.425 2.425.075.1q.225.3.513.5.287.2.637.325.225.125.35.262.125.138.125.413 0 .325-.225.55Q8.825 23 8.5 23q-.45 0-1.087-.475-.638-.475-1.038-.975L4 18.5l1.175-.95 1.15 1.475L9.2 17l1.6-8.125-1.8.7V13H7V8.275l4.125-1.725q.8-.35 1.175-.45.375-.1.7-.1.525 0 .963.275.437.275.737.725l1 1.575q.65 1.025 1.762 1.725 1.113.7 2.538.7v2q-1.65 0-3.087-.7-1.438-.7-2.413-1.825l-.6 3 2.1 2V21.5q.375-.025.712-.125.338-.1.638-.275.1-.05.188-.075.087-.025.187-.025.35 0 .563.238.212.237.212.512 0 .2-.087.362-.088.163-.288.288-.5.3-1.063.45-.562.15-1.187.15Z"/>
    </Icon>
  );
});

IconMaterialSnowshoeingFilled.displayName = 'AmauiIconMaterialSnowshoeingFilled';

export default IconMaterialSnowshoeingFilled;
