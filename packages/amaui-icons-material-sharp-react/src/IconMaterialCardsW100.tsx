import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardsW100'

      short_name='Cards'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-520v-160h160v160H280Zm0 240v-160h160v160H280Zm240-240v-160h160v160H520Zm0 240v-160h160v160H520ZM308-548h104v-104H308v104Zm240 0h104v-104H548v104ZM308-308h104v-104H308v104Zm240 0h104v-104H548v104ZM412-548Zm136 0Zm0 136Zm-136 0ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Z"/>
    </Icon>
  );
});

IconMaterialCardsW100.displayName = 'AmauiIconMaterialCardsW100';

export default IconMaterialCardsW100;
