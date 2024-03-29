import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecyclingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecyclingFilled'

      short_name='Recycling'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.2 9.2 2.225-3.675-1.475-2.45q-.3-.5-.862-.5-.563 0-.863.5L5.775 7.15Zm9.675 6.8-2.225-3.7 3.475-2 1.6 2.675q.275.425.288.963.012.537-.213.962-.25.5-.738.8-.487.3-1.062.3ZM16 23l-4-4 4-4v2h4.75l-1.45 2.9q-.275.5-.75.8-.475.3-1.05.3H16Zm-9.675-2q-.5 0-.913-.262Q5 20.475 4.8 20.05q-.2-.4-.187-.838.012-.437.237-.812L5.7 17H10v4ZM3.85 18.15 2.225 14.9q-.225-.45-.212-.962.012-.513.287-.963l.4-.675L1 11.275 6.475 9.9l1.375 5.5-1.725-1.05Zm13.5-8.55-5.475-1.375L13.6 7.2 10.475 2H14q.525 0 .988.262.462.263.737.713l1.3 2.175 1.7-1.05Z"/>
    </Icon>
  );
});

IconMaterialRecyclingFilled.displayName = 'AmauiIconMaterialRecyclingFilled';

export default IconMaterialRecyclingFilled;
