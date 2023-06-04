import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRebaseEditW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RebaseEditW100'

      short_name='RebaseEdit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.75 9.325-.5-.5 2.5-2.475H7.675q-.125.5-.475.85t-.85.475v8.65q.575.125.962.588.388.462.388 1.087 0 .7-.5 1.2t-1.2.5q-.7 0-1.2-.5T4.3 18q0-.625.388-1.087.387-.463.962-.588v-8.65q-.575-.125-.962-.587Q4.3 6.625 4.3 6q0-.7.5-1.2T6 4.3q.625 0 1.088.387.462.388.587.963h5.075l-2.5-2.475.5-.5L14.075 6ZM18 4.3q.7 0 1.2.5t.5 1.2q0 .7-.5 1.2t-1.2.5q-.7 0-1.2-.5T16.3 6q0-.7.5-1.2t1.2-.5ZM6 19q.425 0 .713-.288Q7 18.425 7 18t-.287-.712Q6.425 17 6 17t-.713.288Q5 17.575 5 18t.287.712Q5.575 19 6 19ZM6 7q.425 0 .713-.287Q7 6.425 7 6t-.287-.713Q6.425 5 6 5t-.713.287Q5 5.575 5 6t.287.713Q5.575 7 6 7Zm12 0q.425 0 .712-.287Q19 6.425 19 6t-.288-.713Q18.425 5 18 5t-.712.287Q17 5.575 17 6t.288.713Q17.575 7 18 7ZM6 18ZM6 6Zm12 0Zm-2.225 6.775.525.5-4.3 4.3V19h1.4l4.35-4.325.475.475-4.5 4.55H11.3v-2.425Zm2.45 2.375-2.45-2.375L17.85 10.7l2.525 2.3Z"/>
    </Icon>
  );
});

IconMaterialRebaseEditW100.displayName = 'AmauiIconMaterialRebaseEditW100';

export default IconMaterialRebaseEditW100;
