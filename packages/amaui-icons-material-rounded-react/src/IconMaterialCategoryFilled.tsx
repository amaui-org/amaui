import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCategoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategoryFilled'

      short_name='Category'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.275 11q-.575 0-.863-.512-.287-.513.013-1.013L11.15 3.4q.3-.475.85-.475t.85.475l3.725 6.075q.3.5.012 1.013-.287.512-.862.512ZM17.5 22q-1.875 0-3.188-1.312Q13 19.375 13 17.5q0-1.875 1.312-3.188Q15.625 13 17.5 13q1.875 0 3.188 1.312Q22 15.625 22 17.5q0 1.875-1.312 3.188Q19.375 22 17.5 22ZM4 21.5q-.425 0-.712-.288Q3 20.925 3 20.5v-6q0-.425.288-.713.287-.287.712-.287h6q.425 0 .713.287.287.288.287.713v6q0 .425-.287.712-.288.288-.713.288Z"/>
    </Icon>
  );
});

IconMaterialCategoryFilled.displayName = 'AmauiIconMaterialCategoryFilled';

export default IconMaterialCategoryFilled;
