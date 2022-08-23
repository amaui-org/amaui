import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPerson4RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person4RoundedW100Filled'
      short_name='Person4'

      {...props}
    >
      <path d="M12 12.2q-1.125 0-1.912-.788Q9.3 10.625 9.3 9.5V6.975q0-.425.288-.725.287-.3.712-.3.275 0 .488.125.212.125.362.325.15-.2.363-.325.212-.125.487-.125t.488.125q.212.125.362.325.15-.2.363-.325.212-.125.487-.125.425 0 .713.3.287.3.287.725V9.5q0 1.125-.787 1.912-.788.788-1.913.788Zm-5.95 7q-.325 0-.537-.213-.213-.212-.213-.537v-.55q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q10.65 14.8 12 14.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v.55q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialPerson4RoundedW100Filled.displayName = 'AmauiIconMaterialPerson4RoundedW100Filled';

export default IconMaterialPerson4RoundedW100Filled;
