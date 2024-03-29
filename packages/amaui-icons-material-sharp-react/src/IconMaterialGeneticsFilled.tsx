import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGeneticsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneticsFilled'

      short_name='Genetics'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 23v-1q0-3.475 1.45-5.638Q7.9 14.2 10.45 12q-2.55-2.2-4-4.363Q5 5.475 5 2V1h2v1q0 .275.013.512.012.238.037.488h9.9q.025-.25.038-.488Q17 2.275 17 2V1h2v1q0 3.475-1.45 5.637Q16.1 9.8 13.55 12q2.55 2.2 4 4.362Q19 18.525 19 22v1h-2v-1q0-.275-.012-.512-.013-.238-.038-.488h-9.9q-.025.25-.037.488Q7 21.725 7 22v1ZM8.45 7h7.1q.325-.475.563-.95.237-.475.437-1.05h-9.1q.2.55.438 1.037.237.488.562.963ZM12 10.7q.5-.425.975-.85t.9-.85h-3.75q.425.425.9.85.475.425.975.85ZM10.125 15h3.75q-.425-.425-.9-.85-.475-.425-.975-.85-.5.425-.975.85t-.9.85ZM7.45 19h9.1q-.2-.55-.437-1.038-.238-.487-.563-.962h-7.1q-.325.475-.562.95-.238.475-.438 1.05Z"/>
    </Icon>
  );
});

IconMaterialGeneticsFilled.displayName = 'AmauiIconMaterialGeneticsFilled';

export default IconMaterialGeneticsFilled;
