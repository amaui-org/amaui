import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatAngledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatAngledW100'

      short_name='AirlineSeatFlatAngled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.9 11.9 1.25-3.475q.1-.275.362-.388.263-.112.538-.012l6.5 2.35q1.05.375 1.538 1.387.487 1.013.087 2.063l-.6 1.6Zm1.925-3.25q-.2.5-.337.962-.138.463-.338.938l-.35.925Zm6.5 9.175L3.95 12.6q-.125-.05-.187-.188-.063-.137-.013-.262t.188-.188q.137-.062.262-.012l14.375 5.225q.125.05.187.188.063.137.013.262t-.188.187q-.137.063-.262.013ZM6.9 10.65q-.75 0-1.287-.538-.538-.537-.538-1.287 0-.75.538-1.288Q6.15 7 6.9 7q.75 0 1.288.537.537.538.537 1.288t-.537 1.287q-.538.538-1.288.538Zm0-.7q.475 0 .8-.325.325-.325.325-.8 0-.475-.325-.8-.325-.325-.8-.325-.475 0-.8.325-.325.325-.325.8 0 .475.325.8.325.325.8.325Zm3.9 1.525 8.375 3.05.325-.95q.275-.8-.075-1.538-.35-.737-1.125-1.012L11.825 8.65ZM6.925 8.85Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatAngledW100.displayName = 'AmauiIconMaterialAirlineSeatFlatAngledW100';

export default IconMaterialAirlineSeatFlatAngledW100;
