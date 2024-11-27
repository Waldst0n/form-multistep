type userProps = {
  data: {
    name: string;
    email: string;
  };
  updateFieldHAndler: (key: string, value: string) => void;
};

const UserForm = ({ data, updateFieldHAndler }: userProps) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          required
          value={data.name || ''}
          onChange={(e) => updateFieldHAndler('name', e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Digite o seu e-mail"
          required
          value={data.email || ''}
          onChange={(e) => updateFieldHAndler('email', e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserForm;
