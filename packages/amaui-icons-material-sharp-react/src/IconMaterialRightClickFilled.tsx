import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRightClickFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightClickFilled'

      short_name='RightClick'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m492 816 25-84q54-13 88.5-56T640 576q0-66-47-113t-113-47q-57 0-100 34.5T324 539l-84 25q5-96 74-162t166-66q100 0 170 70t70 170q0 97-66 166t-162 74ZM139 996l-79-79 171-171-151-50 400-120-120 400-50-151-171 171Z"/>
    </Icon>
  );
});

IconMaterialRightClickFilled.displayName = 'AmauiIconMaterialRightClickFilled';

export default IconMaterialRightClickFilled;
