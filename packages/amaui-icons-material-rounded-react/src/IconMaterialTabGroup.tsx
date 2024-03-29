import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabGroup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabGroup'

      short_name='TabGroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 816q-33 0-56.5-23.5T240 736V256q0-33 23.5-56.5T320 176h480q33 0 56.5 23.5T880 256v480q0 33-23.5 56.5T800 816H320Zm0-80h480V416H560q-17 0-28.5-11.5T520 376V256H320v480ZM160 976q-33 0-56.5-23.5T80 896V376q0-17 11.5-28.5T120 336q17 0 28.5 11.5T160 376v520h520q17 0 28.5 11.5T720 936q0 17-11.5 28.5T680 976H160Zm160-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialTabGroup.displayName = 'AmauiIconMaterialTabGroup';

export default IconMaterialTabGroup;
