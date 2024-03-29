import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConstruction = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Construction'

      short_name='Construction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.85 19.95-4.425-4.425 2.1-2.1 4.425 4.425q.425.425.425 1.05t-.425 1.05q-.425.425-1.05.425t-1.05-.425Zm-13.8 0q-.425-.425-.425-1.05t.425-1.05L9.9 12l-1.7-1.7q-.325.325-.725.3-.4-.025-.675-.3l-.575-.575v2.05l-.175.175q-.225.225-.525.225-.3 0-.525-.225L3.025 9.975Q2.8 9.75 2.8 9.45q0-.3.225-.525L3.2 8.75h2.05L4.7 8.2q-.3-.3-.3-.7 0-.4.3-.7l2.85-2.85q.5-.5 1.075-.725Q9.2 3 9.8 3q.6 0 1.175.225.575.225 1.075.725l-2.3 2.3.55.55q.275.275.3.675.025.4-.3.725L12 9.9l2.25-2.25q-.1-.275-.162-.575-.063-.3-.063-.6 0-1.475 1.013-2.488 1.012-1.012 2.487-1.012.375 0 .713.075.337.075.687.225L16.45 5.75l1.8 1.8 2.475-2.475q.175.35.238.687.062.338.062.713 0 1.475-1.012 2.487Q19 9.975 17.525 9.975q-.3 0-.6-.05t-.575-.175l-10.2 10.2q-.425.425-1.05.425t-1.05-.425Z"/>
    </Icon>
  );
});

IconMaterialConstruction.displayName = 'AmauiIconMaterialConstruction';

export default IconMaterialConstruction;
