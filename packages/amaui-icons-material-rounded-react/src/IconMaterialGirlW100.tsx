import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGirlW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GirlW100'

      short_name='Girl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 7.5q-.525 0-.887-.363-.363-.362-.363-.887t.363-.888Q11.475 5 12 5t.887.362q.363.363.363.888t-.363.887Q12.525 7.5 12 7.5Zm-.4 11.15q-.325 0-.538-.212-.212-.213-.212-.538v-3h-.575q-.4 0-.625-.325-.225-.325-.1-.675l1.625-4.725q.1-.275.325-.425.225-.15.5-.15t.5.15q.225.15.325.425L14.45 13.9q.125.35-.1.675-.225.325-.625.325h-.575v3q0 .325-.212.538-.213.212-.538.212Z"/>
    </Icon>
  );
});

IconMaterialGirlW100.displayName = 'AmauiIconMaterialGirlW100';

export default IconMaterialGirlW100;
