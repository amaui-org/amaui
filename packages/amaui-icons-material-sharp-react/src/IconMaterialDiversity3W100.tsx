import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiversity3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Diversity3W100'

      short_name='Diversity3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.325 19.2v-3.35q0-.525.338-.912Q3 14.55 3.5 14.5h2.775q.375 0 .713.175.337.175.562.525.775 1.1 1.938 1.7 1.162.6 2.512.6t2.525-.6q1.175-.6 1.95-1.7.225-.35.563-.525.337-.175.687-.175H20.5q.5.05.85.438.35.387.35.912v3.35H16v-2.475q-.825.7-1.85 1.087-1.025.388-2.15.388-1.1 0-2.113-.375-1.012-.375-1.862-1.075v2.45ZM12 15.5q-.825 0-1.562-.387Q9.7 14.725 9.2 14.05q-.325-.45-.75-.788-.425-.337-.925-.537.775-.55 2.063-.813 1.287-.262 2.412-.262t2.413.262q1.287.263 2.087.813-.5.2-.925.537-.425.338-.75.788-.475.7-1.225 1.075-.75.375-1.6.375Zm-7.25-3q-.95 0-1.65-.7t-.7-1.65q0-.975.7-1.662.7-.688 1.65-.688.975 0 1.663.688.687.687.687 1.662 0 .95-.687 1.65-.688.7-1.663.7Zm14.5 0q-.95 0-1.65-.7t-.7-1.65q0-.975.7-1.662.7-.688 1.65-.688.975 0 1.663.688.687.687.687 1.662 0 .95-.687 1.65-.688.7-1.663.7ZM12 9.5q-.95 0-1.65-.7t-.7-1.65q0-.975.7-1.663.7-.687 1.65-.687.975 0 1.663.687.687.688.687 1.663 0 .95-.687 1.65-.688.7-1.663.7Z"/>
    </Icon>
  );
});

IconMaterialDiversity3W100.displayName = 'AmauiIconMaterialDiversity3W100';

export default IconMaterialDiversity3W100;
