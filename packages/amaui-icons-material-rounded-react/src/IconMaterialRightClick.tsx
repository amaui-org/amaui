import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRightClick = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightClick'

      short_name='RightClick'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m492 816 25-84q54-13 88.5-56T640 576q0-66-47-113t-113-47q-57 0-100 34.5T324 539l-84 25q5-96 74-162t166-66q100 0 170 70t70 170q0 97-66 166t-162 74Zm-182 9L178 957q-17 17-39 16.5T100 956q-17-17-17-39.5t17-39.5l131-131-91-30q-14-5-13.5-19t14.5-19l303-91q11-4 20 5t5 20l-91 303q-5 14-19 14.5T340 916l-30-91Z"/>
    </Icon>
  );
});

IconMaterialRightClick.displayName = 'AmauiIconMaterialRightClick';

export default IconMaterialRightClick;
