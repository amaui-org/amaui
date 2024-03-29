import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroups3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Groups3W100'

      short_name='Groups3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.7 14.075 1.5-1.5-1.5-1.5-1.5 1.5Zm13.1-.225 1.55-2.5 1.575 2.5Zm-15.85 3.6q-.275 0-.462-.188-.188-.187-.188-.462 0-.875.925-1.45t2.425-.575q.275 0 .525.012.25.013.475.063-.175.35-.262.737-.088.388-.088.813v1.05Zm6.1 0q-.325 0-.537-.213-.213-.212-.213-.537v-.2q0-1.125 1.288-1.788Q9.875 14.05 12 14.05t3.412.662q1.288.663 1.288 1.788v.2q0 .325-.212.537-.213.213-.538.213Zm10.65 0V16.4q0-.425-.087-.813-.088-.387-.263-.737.225-.05.475-.063.25-.012.525-.012 1.5 0 2.425.575.925.575.925 1.45 0 .275-.187.462-.188.188-.463.188Zm-6.7-2.7q-1.8 0-2.9.488Q8 15.725 8 16.5v.25h8v-.25q0-.775-1.1-1.262-1.1-.488-2.9-.488Zm0-1.45q-.8 0-1.375-.575t-.575-1.375q0-.825.575-1.388Q11.2 9.4 12 9.4q.825 0 1.388.562.562.563.562 1.388 0 .8-.562 1.375-.563.575-1.388.575Zm0-3.2q-.525 0-.887.362-.363.363-.363.888t.363.888q.362.362.887.362t.887-.362q.363-.363.363-.888t-.363-.888Q12.525 10.1 12 10.1Zm0 6.65Zm0-5.4Z"/>
    </Icon>
  );
});

IconMaterialGroups3W100.displayName = 'AmauiIconMaterialGroups3W100';

export default IconMaterialGroups3W100;
