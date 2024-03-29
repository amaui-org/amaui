import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnpublished = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Unpublished'

      short_name='Unpublished'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.475 23.3-2.95-2.95q-1.2.8-2.587 1.225Q13.55 22 12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-1.55.425-2.938.425-1.387 1.225-2.587L.675 3.5 2.1 2.075l19.8 19.8ZM12 20q1.125 0 2.137-.3 1.013-.3 1.913-.825L12.2 15l-1.6 1.6-4.25-4.25 1.4-1.4 2.85 2.85.2-.2-5.675-5.65q-.525.9-.825 1.913Q4 10.875 4 12q0 3.325 2.338 5.663Q8.675 20 12 20Zm8.375-2.5L18.9 16.025q.525-.875.812-1.888Q20 13.125 20 12q0-3.325-2.337-5.663Q15.325 4 12 4q-1.125 0-2.137.287-1.013.288-1.888.813L6.5 3.625q1.2-.775 2.588-1.2Q10.475 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 1.525-.425 2.912-.425 1.388-1.2 2.588Zm-5.325-5.35-1.4-1.4 2.6-2.6 1.4 1.4Zm-1.6-1.6ZM10.6 13.4Z"/>
    </Icon>
  );
});

IconMaterialUnpublished.displayName = 'AmauiIconMaterialUnpublished';

export default IconMaterialUnpublished;
