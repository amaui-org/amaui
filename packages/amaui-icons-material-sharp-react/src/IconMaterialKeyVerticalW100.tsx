import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyVerticalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyVerticalW100'

      short_name='KeyVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-680q0-17 11.5-28.5T500-720q17 0 28.5 11.5T540-680q0 17-11.5 28.5T500-640q-17 0-28.5-11.5T460-680Zm40 617L390-175l49-65-51-70 44-67v-127q-52-20-86-68t-34-108q0-78 55-133t133-55q78 0 133 55t55 133q0 60-33.5 108T568-504v373l-68 68ZM340-680q0 60 36 101.5t84 52.5v158l-38 57 51 72-47 63 74 74 40-40v-384q48-11 84-52.5T660-680q0-66-47-113t-113-47q-66 0-113 47t-47 113Z"/>
    </Icon>
  );
});

IconMaterialKeyVerticalW100.displayName = 'AmauiIconMaterialKeyVerticalW100';

export default IconMaterialKeyVerticalW100;
