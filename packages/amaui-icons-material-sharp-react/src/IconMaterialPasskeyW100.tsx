import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPasskeyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PasskeyW100'

      short_name='Passkey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-492q-44.55 0-76.275-31.725Q332-555.45 332-600q0-44.55 31.725-76.275Q395.45-708 440-708q44.55 0 76.275 31.725Q548-644.55 548-600q0 44.55-31.725 76.275Q484.55-492 440-492Zm0-28q33 0 56.5-23.5T520-600q0-33-23.5-56.5T440-680q-33 0-56.5 23.5T360-600q0 33 23.5 56.5T440-520ZM172-212v-52q0-22 13.5-41.5T222-336q55-26 109.5-39T440-388q28 0 56.5 3.5T545-375q2 8 5 15.5t8 15.5q-29-8-60.5-12t-57.5-4q-54 0-111.5 14.5T236-312q-17 9-26.5 21.581Q200-277.839 200-264v24h416v28H172Zm548 55-24-29v-151q-37-8-58.5-33.5T616-430q0-39.167 27-66.583Q670-524 710-524q38 0 66 28t28 66q0 34-22 59.5T724-337v53l29 29-29 29 29 29-33 40Zm-10.353-207Q737-364 756.5-383.25T776-430q0-27.5-19.353-46.75t-47-19.25Q682-496 663-476.75T644-430q0 27.5 19.147 46.75t46.5 19.25ZM440-600h-.5.5Zm0 240Z"/>
    </Icon>
  );
});

IconMaterialPasskeyW100.displayName = 'AmauiIconMaterialPasskeyW100';

export default IconMaterialPasskeyW100;
