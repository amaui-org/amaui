import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlatware = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flatware'

      short_name='Flatware'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21V10.9q-1.05-.5-1.525-1.563Q10 8.275 10 7.1q0-1.575.788-2.838Q11.575 3 13 3q1.425 0 2.213 1.262Q16 5.525 16 7.1q0 1.175-.475 2.237Q15.05 10.4 14 10.9V21Zm5 0V3q1.65 0 2.825 1.175Q21 5.35 21 7v6h-2v8ZM5 21V11q-.825 0-1.413-.588Q3 9.825 3 9V3.7q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5V7h.9V3.7q0-.3.2-.5T6 3q.3 0 .5.2t.2.5V7h.9V3.7q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5V9q0 .825-.588 1.412Q7.825 11 7 11v10Z"/>
    </Icon>
  );
});

IconMaterialFlatware.displayName = 'AmauiIconMaterialFlatware';

export default IconMaterialFlatware;
