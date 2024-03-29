import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrass = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grass'

      short_name='Grass'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20v-2h5.75q-.55-2.125-2.088-3.663Q4.125 12.8 2 12.25q.5-.125.987-.188Q3.475 12 4 12q3.35 0 5.675 2.325Q12 16.65 12 20Zm12 0q0-1.05-.225-2.087-.225-1.038-.65-1.988 1.05-1.775 2.863-2.85Q17.8 12 20 12q.525 0 1.013.062.487.063.987.188-2.125.55-3.65 2.087-1.525 1.538-2.1 3.663H22v2Zm-2-5.975q0-1.625.6-3.05.6-1.425 1.65-2.513 1.05-1.087 2.462-1.737 1.413-.65 3.013-.7-1.4.875-2.45 2.15-1.05 1.275-1.625 2.85-1.1.525-2.012 1.287-.913.763-1.638 1.713Zm-1.825-1.875q-.3-.225-.6-.425-.3-.2-.625-.4 0-.15.025-.313Q9 10.85 9 10.7q0-1.9-.6-3.6Q7.8 5.4 6.7 4q1.65.675 2.862 1.937Q10.775 7.2 11.425 8.85q-.45.75-.775 1.588-.325.837-.475 1.712Z"/>
    </Icon>
  );
});

IconMaterialGrass.displayName = 'AmauiIconMaterialGrass';

export default IconMaterialGrass;
