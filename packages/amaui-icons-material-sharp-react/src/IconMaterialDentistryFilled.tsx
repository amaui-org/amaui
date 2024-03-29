import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDentistryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DentistryFilled'

      short_name='Dentistry'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 2.125q1.65 0 2.825 1.175Q21 4.475 21 6.125q0 .275-.038.737-.037.463-.112 1.063L19.475 18q-.125.95-.862 1.55-.738.6-1.688.6-.575 0-1.062-.25-.488-.25-.813-.7l-2.675-3.9q-.05-.1-.162-.138-.113-.037-.238-.037-.1 0-.4.225l-2.6 3.775q-.35.5-.862.762-.513.263-1.088.263-.95 0-1.675-.612-.725-.613-.85-1.563L3.15 7.925q-.075-.6-.112-1.063Q3 6.4 3 6.125 3 4.475 4.175 3.3 5.35 2.125 7 2.125q.9 0 1.438.237.537.238 1.037.513.5.275 1.063.512.562.238 1.462.238.9 0 1.463-.238.562-.237 1.062-.512t1.05-.513q.55-.237 1.425-.237Z"/>
    </Icon>
  );
});

IconMaterialDentistryFilled.displayName = 'AmauiIconMaterialDentistryFilled';

export default IconMaterialDentistryFilled;
