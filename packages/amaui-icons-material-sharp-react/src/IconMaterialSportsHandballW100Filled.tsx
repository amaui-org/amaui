import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsHandballW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsHandballW100Filled'

      short_name='SportsHandball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.175 9.15q-.675 0-1.137-.462-.463-.463-.463-1.138 0-.675.463-1.138.462-.462 1.137-.462t1.137.462q.463.463.463 1.138 0 .675-.463 1.138-.462.462-1.137.462ZM8.425 22.5l-.6-.35 3-5.2-1.65-.95-1.7 2.9-.6-.35L12 9.7q-.95-.725-1.412-1.438-.463-.712-.463-1.662 0-.725.187-1.438.188-.712.613-1.662l.6.35q-.35.75-.525 1.412-.175.663-.175 1.238 0 .925.487 1.6.488.675 1.613 1.35l2.025 1.2q1.1.65 1.637 1.538.538.887.538 1.762 0 .675-.187 1.4-.188.725-.713 1.75l-.6-.35q.425-.825.613-1.45.187-.625.187-1.3 0-.65-.338-1.3-.337-.65-1.212-1.3Zm4.95-17.6q-.525 0-.887-.363-.363-.362-.363-.887t.363-.888q.362-.362.887-.362t.887.362q.363.363.363.888t-.375.887q-.375.363-.875.363Z"/>
    </Icon>
  );
});

IconMaterialSportsHandballW100Filled.displayName = 'AmauiIconMaterialSportsHandballW100Filled';

export default IconMaterialSportsHandballW100Filled;
