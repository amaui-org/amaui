import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubdirectoryArrowRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowRight'

      short_name='SubdirectoryArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.3 20.275q-.275-.3-.288-.7-.012-.4.288-.7L16.175 16H6q-.425 0-.713-.288Q5 15.425 5 15V5q0-.425.287-.713Q5.575 4 6 4t.713.287Q7 4.575 7 5v9h9.175l-2.9-2.9q-.275-.275-.287-.688-.013-.412.287-.712t.713-.288q.412.013.712.288l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.687.275-.413 0-.713-.3Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowRight.displayName = 'AmauiIconMaterialSubdirectoryArrowRight';

export default IconMaterialSubdirectoryArrowRight;
