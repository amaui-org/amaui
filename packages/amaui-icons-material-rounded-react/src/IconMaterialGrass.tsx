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
      <path d="M3 20q-.425 0-.712-.288Q2 19.425 2 19t.288-.712Q2.575 18 3 18h4.75q-.425-1.575-1.4-2.85-.975-1.275-2.35-2.075-.55-.325-.525-.712.025-.388.675-.363 3.275.05 5.563 2.375Q12 16.7 12 20Zm11 0q0-1.05-.225-2.087-.225-1.038-.65-1.988 1.05-1.725 2.813-2.8Q17.7 12.05 19.85 12q.6-.025.625.387.025.413-.475.688-1.375.8-2.35 2.075-.975 1.275-1.4 2.85H21q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 20 21 20Zm-2-5.975q0-2.65 1.512-4.713Q15.025 7.25 17.4 6.45q.575-.2.85.125t-.225.8q-.8.75-1.387 1.675-.588.925-.988 1.975-1.1.525-2.012 1.287-.913.763-1.638 1.713Zm-1.825-1.875q-.3-.225-.6-.425-.3-.2-.625-.4 0-.15.025-.313Q9 10.85 9 10.7q0-1.325-.287-2.525-.288-1.2-.838-2.325-.275-.55.037-.813.313-.262.813.138.9.725 1.587 1.65.688.925 1.113 2.025-.45.75-.775 1.588-.325.837-.475 1.712Z"/>
    </Icon>
  );
});

IconMaterialGrass.displayName = 'AmauiIconMaterialGrass';

export default IconMaterialGrass;
