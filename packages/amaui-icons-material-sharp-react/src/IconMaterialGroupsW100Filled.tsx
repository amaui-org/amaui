import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupsW100Filled'

      short_name='Groups'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.3 17.45v-.65q0-.875.925-1.45t2.425-.575q.275 0 .525.012.25.013.475.063-.175.35-.262.737-.088.388-.088.813v1.05Zm6 0v-.95q0-1.125 1.288-1.788Q9.875 14.05 12 14.05t3.412.662q1.288.663 1.288 1.788v.95Zm11.4 0V16.4q0-.425-.087-.813-.088-.387-.263-.737.225-.05.475-.063.25-.012.525-.012 1.5 0 2.425.575.925.575.925 1.45v.65Zm-14.05-3.6q-.525 0-.875-.362-.35-.363-.35-.888t.35-.888q.35-.362.875-.362t.888.362q.362.363.362.888t-.362.888q-.363.362-.888.362Zm14.7 0q-.525 0-.888-.362-.362-.363-.362-.888t.362-.888q.363-.362.888-.362t.875.362q.35.363.35.888t-.35.888q-.35.362-.875.362ZM12 13.3q-.8 0-1.375-.575t-.575-1.375q0-.825.575-1.388Q11.2 9.4 12 9.4q.825 0 1.388.562.562.563.562 1.388 0 .8-.562 1.375-.563.575-1.388.575Z"/>
    </Icon>
  );
});

IconMaterialGroupsW100Filled.displayName = 'AmauiIconMaterialGroupsW100Filled';

export default IconMaterialGroupsW100Filled;
