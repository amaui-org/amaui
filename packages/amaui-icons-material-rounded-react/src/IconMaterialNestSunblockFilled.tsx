import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestSunblockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestSunblockFilled'

      short_name='NestSunblock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 7q-.425 0-.712-.287Q2 6.425 2 6V5q0-.425.288-.713Q2.575 4 3 4t.713.287Q4 4.575 4 5v1q0 .425-.287.713Q3.425 7 3 7Zm0 13q-.425 0-.712-.288Q2 19.425 2 19v-1q0-.425.288-.712Q2.575 17 3 17t.713.288Q4 17.575 4 18v1q0 .425-.287.712Q3.425 20 3 20ZM6.55 8.45q-.3-.3-.312-.7-.013-.4.287-.7l.725-.725q.3-.3.713-.288.412.013.712.313t.3.712q0 .413-.3.713l-.725.7q-.3.3-.7.287-.4-.012-.7-.312Zm.7 9.2-.725-.7q-.3-.3-.287-.713.012-.412.312-.712t.713-.3q.412 0 .712.3l.7.725q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3ZM9 13q-.425 0-.712-.288Q8 12.425 8 12t.288-.713Q8.575 11 9 11h5l-1.2-1.6q-.25-.35-.2-.75.05-.4.4-.65.35-.25.75-.2.4.05.65.4l2.4 3.2q.375.5.1 1.05T16 13Zm11.5 6q-.625 0-1.062-.438Q19 18.125 19 17.5v-11q0-.625.438-1.062Q19.875 5 20.5 5t1.062.438Q22 5.875 22 6.5v11q0 .625-.438 1.062Q21.125 19 20.5 19ZM2 16v-2q.825 0 1.413-.588Q4 12.825 4 12t-.587-1.413Q2.825 10 2 10V8q1.65 0 2.825 1.175Q6 10.35 6 12q0 1.65-1.175 2.825Q3.65 16 2 16Z"/>
    </Icon>
  );
});

IconMaterialNestSunblockFilled.displayName = 'AmauiIconMaterialNestSunblockFilled';

export default IconMaterialNestSunblockFilled;
