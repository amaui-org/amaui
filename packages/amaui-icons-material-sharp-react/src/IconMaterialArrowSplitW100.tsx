import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowSplitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowSplitW100'

      short_name='ArrowSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M586-186v-28h140L538-402l20-20 188 188v-140h28v188H586ZM186-466v-28h290l250-252H586v-28h188v188h-28v-140L488-466H186Z"/>
    </Icon>
  );
});

IconMaterialArrowSplitW100.displayName = 'AmauiIconMaterialArrowSplitW100';

export default IconMaterialArrowSplitW100;
