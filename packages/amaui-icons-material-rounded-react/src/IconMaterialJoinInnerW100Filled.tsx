import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJoinInnerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinInnerW100Filled'

      short_name='JoinInner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.425q-.075 0-.137-.025-.063-.025-.163-.1-.8-.575-1.3-1.788Q9.9 13.3 9.9 12q0-1.375.463-2.475.462-1.1 1.337-1.825.1-.075.163-.1.062-.025.137-.025.075 0 .138.025.062.025.162.1.85.625 1.325 1.75T14.1 12q0 1.35-.5 2.55-.5 1.2-1.3 1.75-.1.075-.162.1-.063.025-.138.025Zm3.6 1.275q-.8 0-1.538-.213-.737-.212-1.362-.637l.263-.213q.137-.112.262-.237.525.275 1.125.437.6.163 1.25.163 2.075 0 3.538-1.463Q20.6 14.075 20.6 12q0-2.1-1.462-3.55Q17.675 7 15.6 7q-.65 0-1.25.15t-1.125.425q-.125-.125-.25-.238-.125-.112-.3-.237.65-.4 1.387-.6.738-.2 1.538-.2 2.35 0 4.025 1.663Q21.3 9.625 21.3 12q0 2.35-1.675 4.025Q17.95 17.7 15.6 17.7Zm-7.2 0q-2.35 0-4.025-1.675Q2.7 14.35 2.7 12q0-2.375 1.675-4.037Q6.05 6.3 8.4 6.3q.8 0 1.538.2.737.2 1.387.6-.175.125-.3.237-.125.113-.25.238Q10.25 7.3 9.65 7.15 9.05 7 8.4 7 6.325 7 4.863 8.45 3.4 9.9 3.4 12q0 2.075 1.463 3.537Q6.325 17 8.4 17q.65 0 1.25-.163.6-.162 1.125-.437.125.125.263.237.137.113.262.213-.625.425-1.362.637Q9.2 17.7 8.4 17.7Z"/>
    </Icon>
  );
});

IconMaterialJoinInnerW100Filled.displayName = 'AmauiIconMaterialJoinInnerW100Filled';

export default IconMaterialJoinInnerW100Filled;
